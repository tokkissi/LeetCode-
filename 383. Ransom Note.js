var canConstruct = function (ransomNote, magazine) {
  const magoj = {};

  for (let i = 0; i < magazine.length; i++) {
    if (magoj[magazine[i]]) {
      magoj[magazine[i]]++;
    } else {
      magoj[magazine[i]] = 1;
    }
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (magoj[ransomNote[i]]) {
      magoj[ransomNote[i]]--;
      if (magoj[ransomNote[i]] < 0) {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
};
