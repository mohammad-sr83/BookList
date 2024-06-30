let title =document.getElementById('title')
let author=document.getElementById('author')
let year=document.getElementById('year')
let btn =document.querySelector('.btn')
let tbody=document.getElementById('book-list')
let arrBookList=[]
btn.addEventListener('click',function(event){
    event.preventDefault()
    if (title.value ===''&&author.value===''&&year.value==='') {
        alert('please enter your input')
    }else{
        let arrBook={
            title:title.value,
            author:author.value,
            year:year.value
        }
        let tr =document.createElement('tr')
        let title2=document.createElement('th')
        title2.innerHTML=title.value
        let year2=document.createElement('th')
        year2.innerHTML=year.value
        let author2=document.createElement('th')
        author2.innerHTML=author.value
        tr.append(title2,author2,year2)
        tbody.append(tr)
        arrBookList.push(arrBook)
        localStorage.setItem('book',JSON.stringify(arrBookList))
    }
})
window.onload=function(){
    let arrBookList =JSON.parse(localStorage.getItem('book'))
    arrBookList.forEach(function(ev){
        let tr =document.createElement('tr')
        let title2=document.createElement('th')
        title2.innerHTML=ev.title
        let year2=document.createElement('th')
        year2.innerHTML=ev.year
        let author2=document.createElement('th')
        author2.innerHTML=ev.author
        tr.append(title2,author2,year2)
        tbody.append(tr)
    });
}

fetch('https://randomuser.me/api/')
    .then(res=>res.json())
    .then(res=> console.log(res.results[0]))

   