const encryptObj = {
    btnEncrypt: document.getElementById('encrypt'),
    btnDecrypt: document.getElementById('decrypt'),
    btnCopyText: document.getElementById('copy'),

    fnEncrypt: (text) => {
        let encryptText = text
        encryptText = encryptText.replaceAll('e', 'enter')
        encryptText = encryptText.replaceAll('o', 'ober')
        encryptText = encryptText.replaceAll('i', 'imes')
        encryptText = encryptText.replaceAll('a', 'ai')
        encryptText = encryptText.replaceAll('u', 'ufat')
        return encryptText
    },
    fnDecrypt: (text) => {
        let decryptText = text
        decryptText = decryptText.replaceAll('enter', 'e')
        decryptText = decryptText.replaceAll('ober', 'o')
        decryptText = decryptText.replaceAll('imes', 'i')
        decryptText = decryptText.replaceAll('ufat', 'u')
        decryptText = decryptText.replaceAll('ai', 'a')
        return decryptText
    },
    fnCopyText: (text) => {
        navigator.clipboard.writeText(text)
        alert('Texto copiado')
    },
    fnEnable: () => {
        document.getElementById('found').style.display = 'block'
        document.getElementById('nofound').style.display = 'none'
    },
    fnDisable: () => {
        document.getElementById('found').style.display = 'none'
        document.getElementById('nofound').style.display = 'flex'
    },
}

encryptObj.btnEncrypt.addEventListener('click', () => {
    document.getElementById('areaResult').value = encryptObj.fnEncrypt(
        document.getElementById('areaText').value
    )
    if (document.getElementById('areaText').value != '') encryptObj.fnEnable()
    else encryptObj.fnDisable()
})

encryptObj.btnDecrypt.addEventListener('click', () => {
    document.getElementById('areaResult').value = encryptObj.fnDecrypt(
        document.getElementById('areaText').value
    )
    if (document.getElementById('areaResult').value != '') encryptObj.fnEnable()
    else encryptObj.fnDisable()
})

encryptObj.btnCopyText.addEventListener('click', () => {
    encryptObj.fnCopyText(document.getElementById('areaResult').value)
})

let test = document.getElementById('areaText')

test.addEventListener('keyup', () => {
    if (test.value == '') encryptObj.fnDisable()
})
