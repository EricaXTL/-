/*
js基础(改变透明度实现轮播图的算法) 

利用透明度来实现无位移的轮播图算法。
实现逻辑：将所有要轮播的图片全部定位到一起，即一层一层摞起来，
并且利用层级的属性调整正确的图片顺序，
将图片的透明度全部设置为0，
然后在让初始的第一张图片的透明度为1即可，具体算法如下：
           
*/
// 获取所需元素
var images = document.querySelectorAll('.wrap img');
var spans = document.querySelectorAll('.follow span');
var leftBut = document.getElementById('leftBut');
var rightBut = document.getElementById('rightBut');
// 定义有参函数
function showImage(index) {
for (var i = 0; i < images.length; i++) {
spans[i].index = i;//自定义属性，得到对应的下标
images[i].index = i;//自定义属性，得到对应的下标
images[i].style.zIndex = 100 - i;//为图片排列顺序
//z-index 属性设置元素的堆叠顺序。
//拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。(CSS)
images[i].style.opacity = '0';//将图片透明度全部赋值为0
spans[i].style.background = 'gray';//圆点北京色全部设置为黑色
}
//将传入参数下标值的图片透明度赋值为 1
images[index].style.opacity = '1';
//将传入参数下标值的图片的背景色赋值为white
spans[index].style.background = 'white';
}
showImage(0);//初始设置下标为0的图片和圆点的样式
var count = 1;//获取计数器
// 定义自动轮播函数
function imageMove() {
// 判断count的值如果能被4整除，则将count重新赋值为0；
if (count % 4 == 0) {
count = 0;
}
// 将count值当做参数传给函数showImage();
showImage(count);
count++;//执行一次 ＋1
}
// 设置两秒调用一次函数imageMove()，并且赋值给imageInitailMove
var imageInitailMove = setInterval('imageMove()', 2000);
// 向左点击事件
leftBut.onclick = function() {
// 先清除定时器
clearInterval(imageInitailMove);
// 由于和自动轮方向相反所以要判断count的值当值为0时，重新赋值为4，继续循环
if (count == 0) {
count = 4;
}
count--;
showImage(count);//调用函数count先自－
imageInitailMove = setInterval('imageMove()', 2000);
}
// 向右的点击事件
rightBut.onclick = function() {
clearInterval(imageInitailMove);
imageMove();//由于和自动轮播的方向相同所以直接调用
// 重新为定时器赋值
imageInitailMove = setInterval('imageMove()', 2000);
}
// 圆点的点击事件
for (var i = 0; i < spans.length; i++) {
spans[i].onclick = function() {
clearInterval(imageInitailMove);
// 将当前点击的圆点的下标值赋值给count
count = event.target.index;
// 调用函数
showImage(count);
imageInitailMove = setInterval('imageMove()', 2000);
}
}