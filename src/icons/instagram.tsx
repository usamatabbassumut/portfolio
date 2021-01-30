import React from 'react'

export const Instagram: React.FC = () => {
	return (
		<svg
			width='30'
			height='30'
			viewBox='0 0 30 30'
			fill='none'
			className='instagram-svg'
			xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M15 11.9C14.3869 11.9 13.7875 12.0818 13.2777 12.4224C12.7679 12.7631 12.3706 13.2472 12.136 13.8137C11.9013 14.3801 11.84 15.0034 11.9596 15.6048C12.0792 16.2061 12.3744 16.7585 12.808 17.192C13.2415 17.6256 13.7939 17.9208 14.3952 18.0404C14.9966 18.16 15.6199 18.0987 16.1863 17.864C16.7528 17.6294 17.2369 17.2321 17.5776 16.7223C17.9182 16.2125 18.1 15.6131 18.1 15C18.1 14.5929 18.0198 14.1898 17.864 13.8137C17.7082 13.4376 17.4799 13.0958 17.192 12.808C16.9042 12.5201 16.5624 12.2918 16.1863 12.136C15.8102 11.9802 15.4071 11.9 15 11.9V11.9ZM27.4125 8.8375C27.4059 7.8722 27.2282 6.91571 26.8875 6.0125C26.6366 5.35157 26.2484 4.75137 25.7485 4.25148C25.2486 3.7516 24.6484 3.3634 23.9875 3.1125C23.0843 2.77183 22.1278 2.59408 21.1625 2.5875C19.55 2.5 19.075 2.5 15 2.5C10.925 2.5 10.45 2.5 8.8375 2.5875C7.8722 2.59408 6.91571 2.77183 6.0125 3.1125C5.35157 3.3634 4.75137 3.7516 4.25148 4.25148C3.7516 4.75137 3.3634 5.35157 3.1125 6.0125C2.77183 6.91571 2.59408 7.8722 2.5875 8.8375C2.5 10.45 2.5 10.925 2.5 15C2.5 19.075 2.5 19.55 2.5875 21.1625C2.60095 22.1312 2.77847 23.0906 3.1125 24C3.36229 24.6579 3.75016 25.2546 4.25 25.75C4.74774 26.2529 5.34924 26.6411 6.0125 26.8875C6.91571 27.2282 7.8722 27.4059 8.8375 27.4125C10.45 27.5 10.925 27.5 15 27.5C19.075 27.5 19.55 27.5 21.1625 27.4125C22.1278 27.4059 23.0843 27.2282 23.9875 26.8875C24.6508 26.6411 25.2523 26.2529 25.75 25.75C26.2498 25.2546 26.6377 24.6579 26.8875 24C27.2278 23.0924 27.4056 22.1318 27.4125 21.1625C27.5 19.55 27.5 19.075 27.5 15C27.5 10.925 27.5 10.45 27.4125 8.8375V8.8375ZM24.2375 18.8375C24.1974 19.6089 24.0328 20.3687 23.75 21.0875C23.5073 21.6871 23.1466 22.2318 22.6892 22.6892C22.2318 23.1466 21.6871 23.5073 21.0875 23.75C20.3619 24.017 19.5978 24.1647 18.825 24.1875H11.175C10.4022 24.1647 9.63811 24.017 8.9125 23.75C8.29263 23.5196 7.73285 23.1522 7.275 22.675C6.82208 22.2266 6.47231 21.6848 6.25 21.0875C5.98195 20.3626 5.83826 19.5977 5.825 18.825V15V11.175C5.83826 10.4023 5.98195 9.63736 6.25 8.9125C6.48035 8.29263 6.84784 7.73285 7.325 7.275C7.77542 6.82453 8.31658 6.47512 8.9125 6.25C9.63811 5.98301 10.4022 5.83526 11.175 5.8125H18.825C19.5978 5.83526 20.3619 5.98301 21.0875 6.25C21.7074 6.48035 22.2672 6.84784 22.725 7.325C23.1779 7.77344 23.5277 8.31517 23.75 8.9125C24.017 9.63811 24.1647 10.4022 24.1875 11.175V15C24.1875 17.575 24.275 17.8375 24.2375 18.825V18.8375ZM22.2375 9.5375C22.0887 9.13373 21.854 8.76705 21.5497 8.46277C21.2454 8.15848 20.8788 7.92383 20.475 7.775C19.9206 7.58283 19.3367 7.48974 18.75 7.5H11.25C10.6603 7.50576 10.0763 7.61579 9.525 7.825C9.12741 7.96707 8.76462 8.19214 8.46073 8.48525C8.15684 8.77836 7.91883 9.1328 7.7625 9.525C7.58097 10.0817 7.49229 10.6645 7.5 11.25V18.75C7.51239 19.339 7.62221 19.9219 7.825 20.475C7.97383 20.8788 8.20848 21.2454 8.51277 21.5497C8.81705 21.854 9.18373 22.0887 9.5875 22.2375C10.1208 22.4336 10.6821 22.5434 11.25 22.5625H18.75C19.3397 22.5567 19.9237 22.4467 20.475 22.2375C20.8788 22.0887 21.2454 21.854 21.5497 21.5497C21.854 21.2454 22.0887 20.8788 22.2375 20.475C22.4467 19.9237 22.5567 19.3397 22.5625 18.75V15V11.25C22.5629 10.6597 22.4526 10.0747 22.2375 9.525V9.5375ZM15 19.775C14.3735 19.775 13.7532 19.6514 13.1746 19.4113C12.5959 19.1712 12.0704 18.8192 11.628 18.3757C11.1856 17.9321 10.835 17.4056 10.5964 16.8264C10.3578 16.2471 10.2359 15.6265 10.2375 15C10.2375 14.0551 10.5179 13.1314 11.0431 12.3459C11.5683 11.5603 12.3148 10.9483 13.1881 10.5873C14.0613 10.2263 15.0221 10.1324 15.9487 10.3177C16.8753 10.5029 17.7261 10.959 18.3934 11.628C19.0607 12.2971 19.5144 13.149 19.6973 14.0761C19.8801 15.0032 19.7838 15.9637 19.4204 16.836C19.0571 17.7083 18.4431 18.4532 17.6562 18.9764C16.8694 19.4995 15.9449 19.7775 15 19.775V19.775ZM20 11.1625C19.7237 11.1333 19.468 11.0028 19.2821 10.7962C19.0963 10.5897 18.9934 10.3216 18.9934 10.0437C18.9934 9.76588 19.0963 9.49785 19.2821 9.29129C19.468 9.08472 19.7237 8.95425 20 8.925C20.2763 8.95425 20.532 9.08472 20.7179 9.29129C20.9037 9.49785 21.0066 9.76588 21.0066 10.0437C21.0066 10.3216 20.9037 10.5897 20.7179 10.7962C20.532 11.0028 20.2763 11.1333 20 11.1625Z'
				fill='#EEEEEE'
			/>
		</svg>
	)
}
