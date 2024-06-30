import { Image } from "antd"
import logo from '@/shared/assets/bakay_bank_67 3.svg'

const Header = () => {
	return (
		<header>
			<Image width={150} src={logo}/>
		</header>
	)
}

export default Header