const NiceDate = (props) => {

    const nice = new Intl.DateTimeFormat('en-GB', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
    }).format(Date.parse(props.date))
    return nice
}

export default NiceDate
