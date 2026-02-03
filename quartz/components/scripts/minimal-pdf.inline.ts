document.addEventListener("nav", () => {
  const pdfs = document.querySelectorAll("iframe[src*='.pdf']")
  pdfs.forEach((iframe: any) => {
    if (iframe.src.includes("toolbar=0")) return
    const separator = iframe.src.includes("#") ? "&" : "#"
    iframe.src += `${separator}toolbar=0&navpanes=0&scrollbar=0&view=FitH`
  })
})

export default ""
