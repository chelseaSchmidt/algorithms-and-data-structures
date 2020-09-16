const isUnivalTree = (root) => {
  if (!root) { return true; }
  if (!root.left && !root.right) {
    return true;
  }
  let result
    = !root.left ? root.right.val === root.val
    : !root.right ? root.left.val === root.val
    : root.right.val === root.val && root.val === root.left.val;
  if (!result) { return false; }

  result = isUnivalTree(root.left);
  if (!result) { return false; }

  return isUnivalTree(root.right);
};
