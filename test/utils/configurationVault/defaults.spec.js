import configurationVault from '@utils/configurationVault'

describe('index', () => {
  it('should match the module', () => {
    expect(configurationVault).toMatchSnapshot()
  })

  describe('defaults', () => {
    it('should return the default value for autoAdd', () => {
      expect(configurationVault.getAutoAdd()).toEqual(false)
    })

    it('should return the default value for emojiFormat', () => {
      expect(configurationVault.getEmojiFormat()).toEqual('code')
    })

    it('should return the default value for scopePrompt', () => {
      expect(configurationVault.getScopePrompt()).toEqual(false)
    })

    it('should return the default value for gitmojisUrl', () => {
      expect(configurationVault.getGitmojisUrl()).toEqual(
        'https://gitmoji.dev/api/gitmojis'
      )
    })
  })
})
