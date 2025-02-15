const assert = require('assert')

const PinyinMatch = require('../dist/main.js') // 简体字
const PinyinMatch2 = require('../dist/traditional.js') // 繁体字
const PinyinMatch3 = require('../dist/commonly.js')

let text = '123曾经沧海难为水除却巫山不是云'

describe('PinyinMatch', () => {
  describe('#match', () => {
    it('精准匹配', () => {
      assert.deepEqual([1, 3], PinyinMatch.match(text, '23曾'))
    })
    it('首字母匹配', () => {
      assert.deepEqual([3, 5], PinyinMatch.match(text, 'cjc'))
    })
    it('完整拼音匹配', () => {
      assert.deepEqual([3, 6], PinyinMatch.match(text, 'cengjingcanghai'))
    })
    it('最后一个拼音不完整', () => {
      assert.deepEqual([3, 6], PinyinMatch.match(text, 'cengjingcangha'))
    })
    it('分词功能', () => {
      assert.equal(false, PinyinMatch.match(text, 'engjing'))
    })
    it('多音字', () => {
      assert.deepEqual([3, 5], PinyinMatch.match(text, 'zengjingcang'))
    })
    it('忽略空格', () => {
      assert.deepEqual([3, 5], PinyinMatch.match(text, 'zengji ng cang'))
    })
    it('超出', () => {
      assert.deepEqual(false, PinyinMatch.match(text, 'zengji ng cangsdjfkl'))
    })
    it('忽略空格', () => {
      assert.deepEqual(
        [6, 12],
        PinyinMatch.match('   我 爱你 中   国   ', 'nzg')
      )
    })
    it('忽略空格原文', () => {
      assert.deepEqual(
        [5, 8],
        PinyinMatch.match('   我 爱你 中   国s   ', '爱你中')
      )
    })
    it('忽略空格原文', () => {
      assert.deepEqual(
        [5, 13],
        PinyinMatch.match('   我 爱你 中   国s   ', '爱你中国s')
      )
    })
    it('超出原文', () => {
      assert.deepEqual(
        false,
        PinyinMatch.match('   我 爱你 中   国s   ', '爱你中国sj')
      )
    })
    it('bao', () => {
      assert.deepEqual([1, 1], PinyinMatch.match('淘宝', 'bao'))
    })
    it('issues 7', () => {
      assert.deepEqual([0, 0], PinyinMatch.match('卡号打开', 'ka'))
    })
    it('嫚', () => {
      assert.deepEqual([0, 0], PinyinMatch.match('嫚', 'man'))
    })
  })
})

describe('PinyinMatch2', () => {
  describe('#match 繁体', () => {
    it('繁体字匹配', () => {
      assert.deepEqual([0, 0], PinyinMatch2.match('發', 'fa'))
    })
  })
})

describe('PinyinMatch3', () => {
  describe('#match 常用汉字', () => {
    it('精准匹配', () => {
      assert.deepEqual([1, 3], PinyinMatch3.match(text, '23曾'))
    })
    it('首字母匹配', () => {
      assert.deepEqual([3, 5], PinyinMatch3.match(text, 'cjc'))
    })
    it('完整拼音匹配', () => {
      assert.deepEqual([3, 6], PinyinMatch3.match(text, 'cengjingcanghai'))
    })
    it('最后一个拼音不完整', () => {
      assert.deepEqual([3, 6], PinyinMatch3.match(text, 'cengjingcangha'))
    })
    it('分词功能', () => {
      assert.equal(false, PinyinMatch3.match(text, 'engjing'))
    })
    it('多音字', () => {
      assert.deepEqual([3, 5], PinyinMatch3.match(text, 'zengjingcang'))
    })
    it('忽略空格', () => {
      assert.deepEqual([3, 5], PinyinMatch3.match(text, 'zengji ng cang'))
    })
    it('超出', () => {
      assert.deepEqual(false, PinyinMatch3.match(text, 'zengji ng cangsdjfkl'))
    })
    it('忽略空格', () => {
      assert.deepEqual(
        [6, 12],
        PinyinMatch3.match('   我 爱你 中   国   ', 'nzg')
      )
    })
    it('忽略空格原文', () => {
      assert.deepEqual(
        [5, 8],
        PinyinMatch3.match('   我 爱你 中   国s   ', '爱你中')
      )
    })
    it('忽略空格原文', () => {
      assert.deepEqual(
        [5, 13],
        PinyinMatch3.match('   我 爱你 中   国s   ', '爱你中国s')
      )
    })
    it('超出原文', () => {
      assert.deepEqual(
        false,
        PinyinMatch3.match('   我 爱你 中   国s   ', '爱你中国sj')
      )
    })
    it('bao', () => {
      assert.deepEqual([1, 1], PinyinMatch3.match('淘宝', 'bao'))
    })
    it('issues 7', () => {
      assert.deepEqual([0, 0], PinyinMatch3.match('卡号打开', 'ka'))
    })
    it('嫚', () => {
      assert.equal(false, PinyinMatch3.match('嫚', 'man'))
    })
  })
})
