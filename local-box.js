document.addEventListener('DOMContentLoaded', function () {
  if (typeof window.localStorage === 'undefined') return

  const fields = ['tmcp_tmcartfee_select_0', 'tmcp_tmcartfee_textfield_0', 'tmcp_tmcartfee_textfield_1', 'tmcp_tmcartfee_textfield_2', 'tmcp_tmcartfee_textfield_3']

  // product-based key (URL driven)
  const PRODUCT_KEY = 'tm_epo_' + location.pathname.replace(/\/$/, '')

  const encode = (v) => btoa(unescape(encodeURIComponent(v)))
  const decode = (v) => {
    try {
      return decodeURIComponent(escape(atob(v)))
    } catch {
      return ''
    }
  }

  let stored = {}
  try {
    stored = JSON.parse(localStorage.getItem(PRODUCT_KEY)) || {}
  } catch {}

  fields.forEach((name) => {
    const input = document.querySelector(`input[name="${name}"]`)
    if (!input) return

    if (stored[name]) {
      input.value = decode(stored[name])
      input.dispatchEvent(new Event('change', { bubbles: true }))
    }

    input.addEventListener('input', () => {
      stored[name] = encode(input.value.trim())
      try {
        localStorage.setItem(PRODUCT_KEY, JSON.stringify(stored))
      } catch {}
    })
  })
})
