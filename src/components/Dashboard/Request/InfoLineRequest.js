function InfoLineRequest({ label, value, className = "text-gray-600 mb-1" }) {
  return (
    <p className={className}>
      <span className="font-semibold text-[#a6d947]">{label} :</span> {value}
    </p>
  );
}

export default InfoLineRequest;