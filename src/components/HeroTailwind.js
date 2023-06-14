import styles from '../style'
const heroCss ={
    section: `flex md:flex-row flex-col ${styles.paddingY}`,

    main: `flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`,

    message: 'flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2',

    p: `${styles.paragraph} ml-2`,

    titleContainer: `flex flex-row justify-between items-center w-full`,

    title: 'flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]',
    
    subTitle: 'font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full',

    infoText: `${styles.paragraph} max-w-[470px] mt-5`,

    gradientContainer: `flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`,

    gradientInit: `absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient`,

    gradient: `absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40`,

    gradientFinish: `absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient`,

    btn: `ss:hidden ${styles.flexCenter}`

}
export default heroCss