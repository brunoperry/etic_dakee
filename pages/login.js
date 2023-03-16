import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";

export default function Login() {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <svg width="198" height="47" viewBox="0 0 198 47" fill="white">
        <path d="M34.754 28.903C34.754 32.6429 34.0519 35.8455 32.655 38.5252C31.2508 41.2049 29.2689 43.2528 26.6945 44.6616C24.1201 46.0705 21.0777 46.7821 17.5672 46.7821C14.0567 46.7821 10.9191 46.0632 8.27895 44.6326C5.64607 43.2019 3.60558 41.2194 2.16481 38.685C0.724042 36.1505 0 33.2675 0 30.0286C0 26.7897 0.687475 23.9139 2.06974 21.4013C3.452 18.8886 5.30964 16.9061 7.64998 15.4536C9.99032 14.0012 12.6086 13.275 15.4901 13.275C17.3697 13.275 19.1103 13.58 20.6974 14.1755C22.2844 14.7783 23.6009 15.6207 24.6467 16.6955V0.936806C25.3561 0.646324 26.1387 0.4212 27.0017 0.254173C27.8573 0.0871458 28.6838 0.00726318 29.481 0.00726318C31.1558 0.00726318 32.4503 0.377628 33.3718 1.12562C34.2933 1.87361 34.754 2.97744 34.754 4.42985V28.903ZM12.3599 24.4513C11.0215 25.8456 10.3487 27.6829 10.3487 29.9632C10.3487 32.2435 11.0142 34.0881 12.3599 35.4751C13.6983 36.8694 15.4316 37.5593 17.5672 37.5593C19.7027 37.5593 21.436 36.8622 22.7744 35.4751C24.1128 34.0808 24.7857 32.2435 24.7857 29.9632C24.7857 27.6829 24.1128 25.8456 22.7744 24.4513C21.436 23.057 19.7027 22.3671 17.5672 22.3671C15.4316 22.3671 13.6983 23.0643 12.3599 24.4513Z" />
        <path d="M77.4213 4.42259C77.4213 2.97018 77.8821 1.86635 78.8036 1.11836C79.7251 0.370365 81.0196 0 82.6944 0C83.5282 0 84.3692 0.0871446 85.203 0.24691C86.0367 0.413937 86.8119 0.63906 87.5214 0.929543V24.7345L96.5536 17.2619C97.9359 16.1 99.1426 15.2866 100.196 14.8291C101.242 14.3716 102.346 14.1465 103.523 14.1465C106.449 14.1465 108.584 15.2866 109.923 17.5742C108.797 18.7361 107.027 20.3265 104.62 22.3381C102.214 24.3497 99.5449 26.4847 96.6194 28.7214C99.2157 31.0453 101.849 33.725 104.525 36.7605C107.202 39.7888 109.586 42.8461 111.678 45.918H99.1938C96.8096 42.6791 92.9188 38.4816 87.5214 33.3328V45.918H77.4213V4.42259Z" />
        <path d="M129.933 46.7821C126.583 46.7821 123.65 46.0777 121.12 44.6616C118.589 43.2528 116.615 41.2848 115.189 38.7721C113.77 36.2594 113.053 33.3401 113.053 30.0213C113.053 26.7026 113.792 23.8413 115.284 21.3286C116.768 18.816 118.809 16.8407 121.398 15.4101C123.987 13.9794 126.941 13.2605 130.247 13.2605C133.004 13.2605 135.476 13.7398 137.649 14.6911C139.821 15.6497 141.539 16.9569 142.797 18.6126C144.055 20.2756 144.677 22.1638 144.677 24.2843C144.677 27.7338 143.309 30.2464 140.567 31.8223C137.824 33.3982 133.407 34.1897 127.3 34.1897C126.503 34.1897 125.837 34.1825 125.289 34.1607C124.747 34.1389 124.243 34.1098 123.782 34.0663C124.031 35.3517 124.908 36.3901 126.415 37.1817C127.921 37.9733 129.823 38.3654 132.127 38.3654C132.961 38.3654 133.926 38.271 135.016 38.0822C136.105 37.8934 137.137 37.6465 138.124 37.3342C139.104 37.0219 139.828 36.7242 140.289 36.4337L143.799 43.4125C142.834 44.0371 141.576 44.6035 140.003 45.1264C138.431 45.6493 136.771 46.0487 135.016 46.3391C133.26 46.6296 131.564 46.7749 129.933 46.7749V46.7821ZM130.181 20.9873C128.258 20.9873 126.634 21.6191 125.318 22.89C124.001 24.1608 123.343 25.7658 123.343 27.7192C123.68 27.7628 124.023 27.7773 124.382 27.7773H125.354C128.784 27.7773 131.242 27.4796 132.726 26.8768C134.211 26.2741 134.95 25.3954 134.95 24.2262C134.95 23.2749 134.511 22.4906 133.633 21.8878C132.756 21.2851 131.608 20.9873 130.181 20.9873Z" />
        <path d="M165.126 46.7821C161.776 46.7821 158.843 46.0777 156.313 44.6616C153.782 43.2528 151.808 41.2848 150.381 38.7721C148.963 36.2594 148.246 33.3401 148.246 30.0213C148.246 26.7026 148.985 23.8413 150.469 21.3286C151.954 18.816 153.994 16.8407 156.583 15.4101C159.172 13.9794 162.127 13.2605 165.433 13.2605C168.19 13.2605 170.662 13.7398 172.834 14.6911C175.006 15.6497 176.725 16.9569 177.983 18.6126C179.241 20.2756 179.862 22.1638 179.862 24.2843C179.862 27.7338 178.495 30.2464 175.752 31.8223C173.01 33.3982 168.592 34.1897 162.485 34.1897C161.688 34.1897 161.023 34.1825 160.474 34.1607C159.933 34.1389 159.428 34.1098 158.968 34.0663C159.216 35.3517 160.094 36.3901 161.6 37.1817C163.107 37.9733 165.009 38.3654 167.312 38.3654C168.146 38.3654 169.111 38.271 170.201 38.0822C171.291 37.8934 172.322 37.6465 173.309 37.3342C174.289 37.0219 175.013 36.7242 175.474 36.4337L178.985 43.4125C178.019 44.0371 176.761 44.6035 175.189 45.1264C173.617 45.6493 171.956 46.0487 170.201 46.3391C168.446 46.6296 166.749 46.7749 165.118 46.7749L165.126 46.7821ZM165.374 20.9873C163.451 20.9873 161.827 21.6191 160.511 22.89C159.194 24.1608 158.536 25.7658 158.536 27.7192C158.872 27.7628 159.216 27.7773 159.575 27.7773H160.547C163.977 27.7773 166.435 27.4796 167.919 26.8768C169.404 26.2741 170.143 25.3954 170.143 24.2262C170.143 23.2749 169.704 22.4906 168.826 21.8878C167.949 21.2851 166.8 20.9873 165.374 20.9873Z" />
        <path d="M187.746 45.199C186.554 44.0153 185.955 42.5919 185.955 40.9289C185.955 39.2659 186.554 37.8426 187.746 36.6588C188.938 35.4751 190.35 34.8869 191.981 34.8869C193.612 34.8869 195.023 35.4751 196.215 36.6588C197.408 37.8426 198 39.2659 198 40.9289C198 42.5919 197.408 44.0153 196.215 45.199C195.023 46.3827 193.612 46.971 191.981 46.971C190.35 46.971 188.938 46.3827 187.746 45.199Z" />
        <path d="M63.2111 14.7928C60.8415 13.5582 58.1501 12.8683 55.2905 12.8683H55.2832C45.7975 12.8683 38.0963 20.508 38.0963 29.9269C38.0963 32.0765 38.4913 34.1171 39.2226 36.0052C41.68 42.4322 47.9477 47 55.2832 47H72.4701V29.9269C72.4701 23.3402 68.7109 17.6323 63.2111 14.7928ZM61.273 36.2013C59.9346 37.5884 58.194 38.2855 56.0658 38.2855C55.9634 38.2855 55.861 38.2855 55.7586 38.2783C53.762 38.2129 52.1311 37.523 50.8585 36.2013C49.5201 34.807 48.8473 32.9697 48.8473 30.6822C48.8473 28.3946 49.5201 26.5646 50.8585 25.1703C52.1969 23.7832 53.9302 23.0861 56.0658 23.0861C58.2013 23.0861 59.9346 23.7832 61.273 25.1703C62.0336 25.9618 62.5821 26.9059 62.9112 27.9879C63.1526 28.8013 63.2769 29.7018 63.2769 30.6822C63.2769 32.9697 62.6114 34.807 61.273 36.2013Z" />
      </svg>
      <p>Live it like the Locals</p>
    </Layout>
  );
}
