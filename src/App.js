
import { useState } from 'react';
import './App.css';

let data = {name:'root',
isFolder:true,
child:[{
  name:'Folder1',
  isFolder:true,
  child:[
    {
      name:'Folder2',
      isFolder:true,
      child:[
        {
          name:'Folder3',
          child:[
            {
              name:'file0.jpeg',
              isFolder:false,
            },
            {
              name:'Folder6',
              child:[
                {
                  name:'file4.jpeg',
                  isFolder:false,
                }
                
              ],
              isFolder:true
            },
          ],
          isFolder:true
        },
        {
          name:'file1.jpeg',
          isFolder:false,
        },
        {
          name:'Folder5',
          child:[
            {
              name:'file2.jpeg',
              isFolder:false,
            },
            {
              name:'file3.jpeg',
              isFolder:false,
            }
          ],
          isFolder:true
        }
      ]
    },
    {
      name:'Folder4',
      isFolder:true,
      child:[
        {
          name:'Folder2',
          child:[]
        },
        {
          name:'file1.jpeg',
          isFolder:false,
        }
      ]
    },
  ]
},
{
  name:'Folder12',
  isFolder:true,
  child:[
    {
      name:'Folder22',
      isFolder:true,
      child:[
        {
          name:'Folder23',
          child:[
            {
              name:'file02.jpeg',
              isFolder:false,
            },
            {
              name:'Folder62',
              child:[
                {
                  name:'file42.jpeg',
                  isFolder:false,
                }
                
              ],
              isFolder:true
            },
          ],
          isFolder:true
        },
        {
          name:'file12.jpeg',
          isFolder:false,
        },
        {
          name:'Folder52',
          child:[
            {
              name:'file22.jpeg',
              isFolder:false,
            },
            {
              name:'file23.jpeg',
              isFolder:false,
            }
          ],
          isFolder:true
        }
      ]
    },
    {
      name:'Folder24',
      isFolder:true,
      child:[
        {
          name:'Folder22',
          child:[]
        },
        {
          name:'file1.jpeg',
          isFolder:false,
        }
      ],
    },
    {
      name:'file10.jpeg',
      isFolder:false,
    }
  ]
}]}

function Structur({data}) {
  const [open, setOpen] = useState(false);
  return (
    data.isFolder?<div style={{paddingLeft:'10px'}}>
      <i>{open?'-':'+'}</i><span onClick={()=>setOpen(e=>!e)}>{data.name}<br/></span>
      <div style={{display:open?'block':'none', borderLeft: "1px solid black"}}>
          {data.child.map((item,i)=>{
            return <Structur data={item} key={item.name} />
          })}
      </div>
    </div>
    :
    <div>
      <span>{data.name}</span>
    </div>

  );
}

function App() {
  return (
    <div className="App">
      <Structur data={data}/>
    </div>
  );
}

export default App;
