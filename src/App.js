import './App.css'
import ClipboardJS from 'clipboard'
import VConsole from 'vconsole'

new VConsole()

const clipboard = new ClipboardJS('.btn')

clipboard.on('success', function (e) {
  console.info('Action:', e.action)
  console.info('Text:', e.text)
  console.info('Trigger:', e.trigger)

  e.clearSelection()
})

clipboard.on('error', function (e) {
  console.error('Action:', e.action)
  console.error('Trigger:', e.trigger)
})

function App() {
  return (
    <div className="App">
      <div className="box" />
      <button
        className="btn"
        data-clipboard-text="Just because you can doesn't mean you should — clipboard.js111 淘口令"
        onClick={() => {
          console.log('clicked call up App')
          console.log(navigator.userAgent)
        }}
      >
        copy text
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          window.location.href =
            'intent://m.ltao.com/open/index.html?action=ali.open.nav&module=h5&bootImage=0%20%20%20%20%20%20&source=alimama&bc_fl_src=taobaolite_dld_&packageName=com.taobao.litetao&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fsale%2Fsolutionaplus%2Fcaishendao%3Fwx_navbar_transparent%3Dtrue%26needLogin%3Dtrue#Intent;scheme=taobaolite;package=com.taobao.litetao;end'
        }}
      >
        Android intent open
      </button>
      <br />
      <br />
      <button
        onClick={() => {
          window.location.href =
            'taobaolite://m.ltao.com/open/index.html?action=ali.open.nav&module=h5&bootImage=0&source=ltao_detail_h5&packageName=com.taobao.litetao&bc_fl_src=taobaolite_dld_testchannel&h5Url=https%3A%2F%2Fpages.tmall.com%2Fwow%2Fz%2Fsale%2Fsolutionaplus%2Fcaishendao%3Fwx_navbar_transparent%3Dtrue%26needLogin%3Dtrue'
        }}
      >
        url scheme
      </button>
      <div>
        <img src="https://gw.alicdn.com/tfs/TB1Q5Bf0xv1gK0jSZFFXXb0sXXa-200-200.png" alt="apple" />
      </div>
    </div>
  )
}

export default App
