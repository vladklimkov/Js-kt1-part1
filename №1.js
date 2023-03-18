let table_value=[];
for (let i=0;i<30;i++) 
    table_value.push(Math.abs(Math.floor(Math.random()*100 - 1)))
    
let table = document.querySelector('#table');

for (let i = 0; i < 6; i++) 
{
    let tr = document.createElement('tr');
    
    for (let j = 0; j < 5; j++)  {
        let td = document.createElement('td');
        td.textContent = table_value[i * 5 + j];
        if(table_value[i * 5 + j] > 49)
        {
            td.classList.add('bgOrange');
        }
        tr.appendChild(td);
    }
    
    table.appendChild(tr);
}