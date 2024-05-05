
export default function Button(props) {
    const { label, onClick, className } = props

    return (
        <button
            type="button"
            onClick={onClick}
            className={`${className}  ring-1
ring-cyan-600
bg-cyan-200
rounded-lg 
p-0
text-sm text-center font-medium 
hover:ring-cyan-800 hover:bg-white
active:ring-cyan-200
`}>

            {label}
        </button>


    )
}