function callofimg()
{
    var allimgtag=document.images;
    for(i=0;i<allimgtag.length;i++)
    {
        allimgtag[i].src=`${i}.jpg`
    }
}
callofimg()
function bigwindow(imgUrl)
{
    document.getElementById("imgcontainer").style.backgroundImage=`url(${imgUrl})`
}