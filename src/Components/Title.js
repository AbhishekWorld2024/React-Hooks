import React from 'react'

function Title() {
    console.log('Title page')
  return (
    <div>
      <h2>This is the Title</h2>
    </div>
  )
}

export default React.memo(Title)
