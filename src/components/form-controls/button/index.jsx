
export default function Button(props) {
    const { label, onClick, className } = props

    return (

        // text-cyan-600 hover:text-cyan-500
<button
type="button"
onClick={onClick}
className={`${className} py-1  px-5 me-2 mb-2 text-sm font-medium 
text-gray-900 focus:outline-none 
bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-cyan-700 
focus:z-10 focus:ring-4 focus:ring-gray-100`}
>
{label}
</button>
    )
}