function InfoLineRequest({ label, value, className = "text-gray-600 mb-1" }) {
  return (
    <p className={className}>
      <span className="font-semibold text-secondary">{label} :</span> {value}
    </p>
  );
}

export default InfoLineRequest;