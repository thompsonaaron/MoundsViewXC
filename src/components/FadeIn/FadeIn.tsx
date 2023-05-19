import styles from './fadein.module.css'

interface FadeInProps {
    duration?: number
    delay?: number
    children: any
}

const FadeIn = ({ duration = 300, delay = 0, children }: FadeInProps) => {
    return <div class={styles.animation}>{children}</div>
}

export default FadeIn
