function PriceInput(props) {
    const { value, onChange, errorMessage } = props;

    return (
        <div>
            <label className="block mb-1 font-medium text-gray-700">Prix (€)</label>
            <input type="number" step="0" min="0" value={value} onChange={e => onChange(parseFloat(e.target.value) || '')} className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"/>
            {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}
        </div>
    )
}

export default PriceInput;