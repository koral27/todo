import React, { useState } from 'react'

interface TodoFormProps {
  onAdd(title: string): void
}

const AddForm: React.FC<TodoFormProps> = (props) => {

  const [title, setTitle] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const submitHadler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setTitle('')
    props.onAdd(title)
  }

  return (
    <form onSubmit={submitHadler}>
      <div className="col s12">
        <div className="input-field col s6">
          <input 
            onChange={changeHandler}
            placeholder="placeholder" 
            id="title" 
            type="text"
            value={title}
            className="validate" />
          <label htmlFor="title" className="active">Enter a task</label>
        </div>
      </div>
    </form>
  )
}

export default AddForm;