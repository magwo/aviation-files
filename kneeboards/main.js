
async function renderFile() {
    const base = await (await fetch('base.html')).text();
    const content = document.querySelector('template');
    const contentHtml = content.innerHTML;

    document.querySelector('html').innerHTML = base;
    document.querySelector('#basePageContainer').innerHTML = contentHtml;
}

renderFile();