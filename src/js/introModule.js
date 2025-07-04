function introModuleCardSpacer() {
    const parent = document.querySelector('.introModuleTextWrapper');
    const child1 = document.querySelector('.introInfoDetailWrapper');
    const child2 = document.querySelector('.introModuleSigilWrapper');

    const minHeight = child1.clientHeight;

    parent.style.height = minHeight + 'px';
    child1.style.height = minHeight + 'px';
    child2.style.height = minHeight + 'px';

    const star01 = document.querySelector('.stars01');
    const star02 = document.querySelector('.stars02');
    const sigil = document.querySelector('.sigil');

    sigil.style.width = 100 + "%";
    star01.style.height = minHeight / 6 + "px";
    star02.style.height = minHeight / 6 + "px";
}

export { introModuleCardSpacer };