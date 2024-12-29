import { useState } from "react"

export function Forms ({ addTrening }){
    const [form, setForm] = useState({data: "" , distance: 0})
    
    const handlerChange = (event) => {

        const value = event.target.name === 'date'
        ? new Date(event.target.value).getTime()
        : +event.target.value

        setForm({...form, [event.target.name]: value})
    }

    const onForms = (event) => {
        event.preventDefault()
        addTrening(form)
        event.target.reset()

    }

    return(
        <div className="forms">
            <form className="forms" onSubmit={onForms}>
                <div className="inTab">
                    <label className="l" htmlFor="date">Дата (ДД.ММ.ГГ)</label>
                    <input id="date" name="date" type="date" required  onChange={handlerChange} inputMode="numeric"/>
                </div>
                <div className="inTab">
                    <label className="l" htmlFor="number">Пройдено км</label>
                    <input id="number" name="distance" type="number" required  onChange={handlerChange} inputMode="numeric"/>
                </div>
                <div className="inBtn">
                    <button className="btn">Ок</button>
                </div>                
            </form>
        </div>
    )
}