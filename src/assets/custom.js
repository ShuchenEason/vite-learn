define(['base/js/namespace'], function(Jupyter){
    Jupyter._target = '_self';
    //隐藏退出按钮和logo
    const quitWrap = document.querySelector("#shutdown_widget");
    const loginOutWrap = document.querySelector("#login_widget");
    const logoWrap = document.querySelector("#ipython_notebook");
    if (quitWrap) quitWrap.innerHTML = "";
    if (loginOutWrap) loginOutWrap.innerHTML = "";
    if (logoWrap) logoWrap.innerHTML = "";
})