const ValueSection = ({ id, title, description }) => {
  return (
    <div className='values'>
        <div className="value-one">
            <h3>{`0${id}.`}</h3>
            <h3>{title}</h3>
        </div>
        <div className="value-two">
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ValueSection