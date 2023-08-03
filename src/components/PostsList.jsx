import { DataGrid } from "devextreme-react"
import { Column, Paging, Editing, Selection, FilterRow } from "devextreme-react/data-grid"
import { useEffect, useState } from "react"

const PostsList = () => {
  const [posts, setPosts] = useState()
  const [selected, setSelected] = useState()

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  
  const handleSelect = (e) => {
    setSelected(e.selectedRowsData[0])
  }
  console.log(selected);

  return (
    <>
      <div style={{maxWidth: '1200px'}}>
        

      <DataGrid
        dataSource={posts}
        keyExpr={"id"}
        showBorders={true}
        customizeColumns={(c) => c[0].width = 50}
        onSelectionChanged={handleSelect}
        
        >
        <FilterRow visible/>
        <Selection mode="single" />
        <Editing
            // mode="batch"
            // mode="form"
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true} />
        <Paging defaultPageSize={10}/>
        <Column dataField="id"/>
        <Column dataField="userId"/>
        <Column dataField="body"/>
        <Column dataField="title"/>
      </DataGrid>
      {
        selected && <>
          <h2>{selected.title}</h2>
          <p>{selected.body}</p>
        </>
      }
      </div>
    </>
  )
}

export default PostsList