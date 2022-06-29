export default function EmailInput( { children }) {
    return (<div className="">
         <label htmlFor={children.props.id}>Email:</label>
        {children}
    </div>)
}