/*
 * @Author: PiPi
 * @Email: pisenliang@gmail.com
 * @Github: https://github.com/SenLiangpi
 * @Website: https://senliangpi.github.io/blog/#/
 * @Date: 2020-08-05 13:49:33
 * @LastEditors: Pi Patle
 * @LastEditTime: 2023-01-10 16:49:21
 */
// export class recording{
//   authorization(){
//     if (navigator.mediaDevices.getUserMedia) {
//       const constraints = { audio: true };
//       navigator.mediaDevices.getUserMedia(constraints).then(stream=>{
//         let context = new (window.AudioContext || window.webkitAudioContext);
//         let audioInput = context.createMediaStreamSource(stream);
//         this.recorder = context.createScriptProcessor();
//         var volume = context.createGain();
//         audioInput.connect(volume);
//         this.audioData = {
//           size: 0,//录音文件长度
//           buffer: [],//录音缓存
//           inputSampleRate: context.sampleRate,//输入采样率
//           inputSampleBits: 16,//输入采样数位 8, x
//           outputSampleRate: 44100,//输出采样率
//           oututSampleBits: 16,//输出采样数位 8, 16
//           input: function (data) {
//             this.buffer.push(new Float32Array(data));
//             this.size += data.length;
//           },
//           compress: function () { //合并压缩
//             //合并
//             var data = new Float32Array(this.size);
//             var offset = 0;
//             for (var i = 0; i < this.buffer.length; i++) {
//               data.set(this.buffer[i], offset);
//               offset += this.buffer[i].length;
//             }
//             //压缩
//             var compression = parseInt(this.inputSampleRate / this.outputSampleRate);
//             var length = data.length / compression;
//             var result = new Float32Array(length);
//             var index = 0, j = 0;
//             while (index < length) {
//               result[index] = data[j];
//               j += compression;
//               index++;
//             }
//             return result;
//           },
//           encodeWAV: function () {
//             var sampleRate = Math.min(this.inputSampleRate, this.outputSampleRate);
//             var sampleBits = Math.min(this.inputSampleBits, this.oututSampleBits);
//             var bytes = this.compress();
//             var dataLength = bytes.length * (sampleBits / 8);
//             var buffer = new ArrayBuffer(44 + dataLength);
//             var data = new DataView(buffer);
//             var channelCount = 1;//单声道
//             var offset = 0;
//             var writeString = function (str) {
//               for (var i = 0; i < str.length; i++) {
//                 data.setUint8(offset + i, str.charCodeAt(i));
//               }
//             };
//             // 资源交换文件标识符
//             writeString('RIFF'); offset += 4;
//             // 下个地址开始到文件尾总字节数,即文件大小-8
//             data.setUint32(offset, 36 + dataLength, true); offset += 4;
//             // WAV文件标志
//             writeString('WAVE'); offset += 4;
//             // 波形格式标志
//             writeString('fmt '); offset += 4;
//             // 过滤字节,一般为 0x10 = 16
//             data.setUint32(offset, 16, true); offset += 4;
//             // 格式类别 (PCM形式采样数据)
//             data.setUint16(offset, 1, true); offset += 2;
//             // 通道数
//             data.setUint16(offset, channelCount, true); offset += 2;
//             // 采样率,每秒样本数,表示每个通道的播放速度
//             data.setUint32(offset, sampleRate, true); offset += 4;
//             // 波形数据传输率 (每秒平均字节数) 单声道×每秒数据位数×每样本数据位/8
//             data.setUint32(offset, channelCount * sampleRate * (sampleBits / 8), true); offset += 4;
//             // 快数据调整数 采样一次占用字节数 单声道×每样本的数据位数/8
//             data.setUint16(offset, channelCount * (sampleBits / 8), true); offset += 2;
//             // 每样本数据位数
//             data.setUint16(offset, sampleBits, true); offset += 2;
//             // 数据标识符
//             writeString('data'); offset += 4;
//             // 采样数据总数,即数据总大小-44
//             data.setUint32(offset, dataLength, true); offset += 4;
//             // 写入采样数据
//             if (sampleBits === 8) {
//               for (var i = 0; i < bytes.length; i++, offset++) {
//                 var s = Math.max(-1, Math.min(1, bytes[i]));
//                 var val = s < 0 ? s * 0x8000 : s * 0x7FFF;
//                 val = parseInt(255 / (65535 / (val + 32768)));
//                 data.setInt8(offset, val, true);
//               }
//             } else {
//               for (var i = 0; i < bytes.length; i++, offset += 2) {
//                 var s = Math.max(-1, Math.min(1, bytes[i]));
//                 data.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
//               }
//             }
//             return new Blob([data], { type: 'audio/wav' });
//             // return new Blob([data], { type: "audio/ogg; codecs=opus" });
//           }
//         };
//         this.recorder.onaudioprocess = function (e) {
//           this.audioData.input(e.inputBuffer.getChannelData(0));
//         };
//       })
//     } else {
//       return false
//     }
//   }
//   start(){
//     audioInput.connect(this.recorder);
//     this.recorder.connect(context.destination);
//   }
//   end(){
//     this.recorder.disconnect();
//     console.log(this.audioData.encodeWAV())
//     console.log(window.URL.createObjectURL(this.audioData.encodeWAV()))
//     // window.URL.createObjectURL(audioData.encodeWAV());
//   }
// }
/**
 * @Author: Pi Patle
 * @description: recording web端录音
 * @return {class}
 */
export class recording {
  authorization (recordingTime) {
    this.recordingTime = recordingTime
    if (navigator.mediaDevices.getUserMedia) {
      return true
    } else {
      return false
    }
  }

  start () {
    return new Promise((resolve, reject) => {
      const constraints = { audio: true }
      navigator.mediaDevices.getUserMedia(constraints).then(stream => {
        this.context = new (window.AudioContext || window.webkitAudioContext)()
        this.audioInput = this.context.createMediaStreamSource(stream)
        this.recorder = this.context.createScriptProcessor()
        var volume = this.context.createGain()
        this.audioInput.connect(volume)
        console.log(this.context.sampleRate)
        const newThis = this
        this.audioData = {
          size: 0, // 录音文件长度
          buffer: [], // 录音缓存
          inputSampleRate: newThis.context.sampleRate, // 输入采样率
          inputSampleBits: 16, // 输入采样数位 8, 16
          outputSampleRate: 44100, // 输出采样率
          oututSampleBits: 16, // 输出采样数位 8, 16
          input: function (data) {
            this.buffer.push(new Float32Array(data))
            this.size += data.length
          },
          compress: function () { // 合并压缩
            // 合并
            var data = new Float32Array(this.size)
            var offset = 0
            for (var i = 0; i < this.buffer.length; i++) {
              data.set(this.buffer[i], offset)
              offset += this.buffer[i].length
            }
            // 压缩
            var compression = parseInt(this.inputSampleRate / this.outputSampleRate)
            var length = data.length / compression
            var result = new Float32Array(length)
            var index = 0
            var j = 0
            while (index < length) {
              result[index] = data[j]
              j += compression
              index++
            }
            return result
          },
          encodeWAV: function () {
            var sampleRate = Math.min(this.inputSampleRate, this.outputSampleRate)
            var sampleBits = Math.min(this.inputSampleBits, this.oututSampleBits)
            var bytes = this.compress()
            var dataLength = bytes.length * (sampleBits / 8)
            var buffer = new ArrayBuffer(44 + dataLength)
            var data = new DataView(buffer)
            var channelCount = 1 // 单声道
            var offset = 0
            var writeString = function (str) {
              for (var i = 0; i < str.length; i++) {
                data.setUint8(offset + i, str.charCodeAt(i))
              }
            }
            // 资源交换文件标识符
            writeString('RIFF')
            offset += 4
            // 下个地址开始到文件尾总字节数,即文件大小-8
            data.setUint32(offset, 36 + dataLength, true)
            offset += 4
            // WAV文件标志
            writeString('WAVE')
            offset += 4
            // 波形格式标志
            writeString('fmt ')
            offset += 4
            // 过滤字节,一般为 0x10 = 16
            data.setUint32(offset, 16, true)
            offset += 4
            // 格式类别 (PCM形式采样数据)
            data.setUint16(offset, 1, true)
            offset += 2
            // 通道数
            data.setUint16(offset, channelCount, true)
            offset += 2
            // 采样率,每秒样本数,表示每个通道的播放速度
            data.setUint32(offset, sampleRate, true)
            offset += 4
            // 波形数据传输率 (每秒平均字节数) 单声道×每秒数据位数×每样本数据位/8
            data.setUint32(offset, channelCount * sampleRate * (sampleBits / 8), true)
            offset += 4
            // 快数据调整数 采样一次占用字节数 单声道×每样本的数据位数/8
            data.setUint16(offset, channelCount * (sampleBits / 8), true)
            offset += 2
            // 每样本数据位数
            data.setUint16(offset, sampleBits, true)
            offset += 2
            // 数据标识符
            writeString('data')
            offset += 4
            // 采样数据总数,即数据总大小-44
            data.setUint32(offset, dataLength, true)
            offset += 4
            // 写入采样数据
            if (sampleBits === 8) {
              for (let i = 0; i < bytes.length; i++, offset++) {
                const s = Math.max(-1, Math.min(1, bytes[i]))
                var val = s < 0 ? s * 0x8000 : s * 0x7FFF
                val = parseInt(255 / (65535 / (val + 32768)))
                data.setInt8(offset, val, true)
              }
            } else {
              for (let i = 0; i < bytes.length; i++, offset += 2) {
                const s = Math.max(-1, Math.min(1, bytes[i]))
                data.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true)
              }
            }
            return new File([data], 'foo.wav', { type: 'audio/wav' })
          },
        }
        this.recorder.onaudioprocess = function (e) {
          newThis.recordingTime(newThis.context.currentTime)
          newThis.audioData.input(e.inputBuffer.getChannelData(0))
        }
        this.audioInput.connect(this.recorder)
        this.recorder.connect(this.context.destination)
        resolve(true)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  end () {
    this.context.close()
    this.recorder.disconnect()
    const file = this.audioData.encodeWAV()
    this.recordingTime(0)
    return file
  }
}