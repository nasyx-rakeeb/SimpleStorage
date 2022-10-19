import ethers from 'ethers'
import * as ganache from 'ganache-cli'

const main = async () => {
  const provider = ethers.providers.Web3Provider(ganache.provider())
  const wallet = new ethers.Wallet(provider)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
