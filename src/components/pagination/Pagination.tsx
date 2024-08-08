import styles from './pagination.module.scss'
import Link from 'next/link'

const Pagination = ({ totalPage, currentPage }: { totalPage: number, currentPage: number }) => {
    return (
        <div className={styles['pagination']} >
            <Link href={currentPage > 1 ? `?page=${currentPage - 1}` : ''} >
                <button className={styles['pagination__prev']} disabled={currentPage === 1}>prev</button>
            </Link>
            {[...Array(totalPage)].map((_, i) => (
                <Link key={i} href={`?page=${i + 1}`}>
                    <button
                        className={`${styles['pagination__page']} ${i + 1 === currentPage ? styles['pagination__page--active'] : ''}`} >
                        {i + 1}
                    </button>
                </Link>
            ))}
            <Link href={currentPage < totalPage ? `?page=${currentPage + 1}` : ''} >
                <button className={styles['pagination__next']} disabled={currentPage === totalPage} >next</button>
            </Link>
        </div>
    )
}

export default Pagination