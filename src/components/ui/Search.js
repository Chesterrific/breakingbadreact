import React, { useState } from 'react'

const Search = ({getQuery}) => {
  const [text, setText] = useState('')

  const OnChange = (e) => {
    setText(e.target.value)
    getQuery(e.target.value)
  }

  return (
    <section className='search'>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search Characters'
          value={text}
          onChange={OnChange}
        ></input>
      </form>
    </section>
  )
}

export default Search
