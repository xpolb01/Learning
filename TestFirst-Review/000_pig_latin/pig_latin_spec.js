// # Topics
// * strings
//
// # Pig Latin
//
// Pig Latin is a made-up children's language that's int});ed to be confusing. It obeys a few simple rules (below) but when it's spoken quickly it's really difficult for non-children (and non-native speakers) to understand.
//
// Rule 1: If a word begins with a vowel sound, add an "ay" sound to the end of the word.
// Rule 2: If a word begins with a consonant sound, move it to the end of the word, and then add an "ay" sound to the end of the word.
//
// (There are a few more rules for edge cases, and there are regional variants too, but that should be enough to understand the tests.)
//
// See <http://en.wikipedia.org/wiki/Pig_latin> for more details.

// **Do not use elaborate RegExp's in your solutions.**

describe("translate", function() {
  it("translates a word beginning with a vowel", function() {
    var s = translate("apple");
    expect(s).toEqual("appleay");
  });

  it("translates a word beginning with a consonant", function() {
    var s = translate("banana");
    expect(s).toEqual("ananabay");
  });

  it("translates a word beginning with two consonants", function() {
    var s = translate("cherry");
    expect(s).toEqual("errychay");
  });

  it("translates two words", function() {
    var s = translate("eat pie");
    expect(s).toEqual("eatay iepay");
  });

  it("translates a word beginning with three consonants", function() {
    var s = translate("three");
    expect(s).toEqual('eethray');
  });

  it("counts 'sch' as a single phoneme", function() {
    var s = translate("school");
    expect(s).toEqual("oolschay");
  });

  it("counts 'qu' as a single phoneme", function() {
    var s = translate("quiet");
    expect(s).toEqual("ietquay");
  });

  it("counts 'qu' as a consonant even when it's preceded by a consonant", function() {
    var s = translate("square");
    expect(s).toEqual("aresquay");
  });

  it("translates many words", function() {
    var s = translate("the quick brown fox");
    expect(s).toEqual("ethay ickquay ownbray oxfay");
  });


});
