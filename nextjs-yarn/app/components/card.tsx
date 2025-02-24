import React from 'react'

const Card = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='p-[100px] m-[10px] shadow-[0 4px 8px 0 rgba(0,0,0,0.2)] border-[1px solid #ddd] flex justify-center items-center'>
			{children}
		</div>
	)
}

export default Card
