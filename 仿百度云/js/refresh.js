const ref = document.getElementById('ref')

//傻瓜版刷新

ref.onclick = function(){
    render(0)
    renderMenu(0);
    treeMenu.appendChild(renderTree(-1,-1));
}