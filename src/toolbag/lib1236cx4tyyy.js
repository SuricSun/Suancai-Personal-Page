class Timer {
  callback(callback) {
    this._callback = callback
    return this
  }

  timeMs(timeMs) {
    this._timeMs = timeMs
    return this
  }

  ease(ease) {
    this._ease = ease
    return this
  }

  denominator(denominator) {
    this._denominator = denominator
    return this
  }

  stop() {
    this._status = 0
  }

  complete() {
    this._status = 1
  }

  run() {
    let thiz = this
    let promise = new Promise((resolve, reject) => {
      this.__run(resolve, reject)
    })
    let handler = {
      get(o, k) {
        if (k === 'stop') {
          // * interrupt animation
          return thiz.stop.bind(thiz)
        } else if (k === 'complete') {
          return thiz.complete.bind(thiz)
        }
        // console.log(promise, k)
        return promise[k].bind(promise)
      }
    }
    return new Proxy(promise, handler)
  }

  __run(resolve, reject) {
    if (!this._callback || !this._timeMs) {
      console.error('Callback is', this._callback)
      console.error('TimeMs is', this._timeMs)
      throw new Error(`Invalid Arg: Need a Callback and TimeMs to run this Timer!`)
    }
    let begin = null
    let ctx = {
      num: 0,
      den: this._denominator ? this._denominator : 1000
    }
    let rAF = (t) => {
      if (begin == null) {
        begin = t
      }
      let elapsed = t - begin
      ctx.num = (elapsed / this._timeMs) * ctx.den
      if (this._status === 0) {
        // * stopped
        this._callback(ctx)
        resolve('stopped')
        return
      } else if (elapsed >= this._timeMs || this._status === 1) {
        ctx.num = ctx.den
        this._callback(ctx)
        resolve('completed')
        return
      }
      this._callback(ctx)
      requestAnimationFrame(rAF)
    }
    requestAnimationFrame(rAF)
  }
}

export { Timer }
