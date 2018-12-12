
const folderBox = document.getElementsByClassName('folder-content')[0];
const folders = folderBox.getElementsByClassName('folders')[0];
const breadmenu = folderBox.getElementsByClassName('breadmenu')[0];
const checkall = folderBox.getElementsByClassName('checkall')[0].children[0];
const breadNav = folderBox.getElementsByClassName('bread-nav')[0];
const fEmpty = folderBox.getElementsByClassName('f-empty')[0];  //暂无文件的图片
const modelTree = document.getElementsByClassName('modal-tree')[0];
const content = modelTree.getElementsByClassName('content')[0];


let seleEleArr = [];
const {getChild,getParents,targetP,addAttr} = myTools;
const {log,dir} = console;
addAttr('num',[]); 
function render(id){
    
    folders.innerHTML = ''
    let arr = getChild(id);
    seleEleArr.length = 0;


    if(!arr){
        fEmpty.style.display = 'block';
        checkall.className = '';
    }else{
        //every() 方法用于检测数组所有元素是否都符合指定条件
        checkall.className = arr.every(e=>e.checked)?'checked':'';
        fEmpty.style.display = 'none';
        arr.forEach((e) => {
            
            if(e.checked){seleEleArr.push(e);}
           
            let div = document.createElement('div');
            div.className = e.checked?'file-item active':'file-item';
            div.dataset.id = e.id;

            let img = new Image();
            img.src = 'img/folder-b.png';
            img.ondblclick = function(){
                render(e.id);
                renderMenu(e.id);
               
                arr.forEach(e=>e.checked=false);
            }
    
            
            let span = document.createElement('span');
            span.className = 'folder-name';
            span.innerHTML = e.title;
    
            
            let input = document.createElement('input');
            input.type = 'text';
            input.className = 'editor';
            input.value = e.title;
    
            
            let i = document.createElement('i');
            i.className = e.checked?'checked':'';
            i.onclick = function(){
                data[e.id].checked = !data[e.id].checked;
                // log(data);
                
                render(id);
            }
    
            div.appendChild(img);
            div.appendChild(span);
            div.appendChild(input);
            div.appendChild(i);
        
            folders.appendChild(div);
        });
    }

   

}
render(0)


