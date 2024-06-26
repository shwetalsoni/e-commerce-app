interface ParamType {
  name: string
  text: string
}

const Review = (params: ParamType) => {
  return (
    <div className="flex flex-col p-2 gap-3 bg-gray-50">
      <h3 className="text-sm text-gray-600">{params.name}</h3>
      <p>{params.text}</p>
    </div>
  )
}

export default Review
