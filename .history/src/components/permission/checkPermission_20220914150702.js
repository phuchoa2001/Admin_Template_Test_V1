const permissionCheckTypeMethods = {
  'one-of': (roles) => roles.some,
  'all-of': (roles) => roles.every,
};

export const checkPermission = (user, roles, config = {}) => {
  const { type = 'one-of', entityOwnerId, debug } = config;

  // Get an array method for checking permissions
  const checkMethod =
    permissionCheckTypeMethods?.[type] || permissionCheckTypeMethods['one-of'];

  // Multiple roles
  // const userRoles = user?.roles || user?.groups || [];

  // Single role
  const userRole = user?.role?.name;
  console.log("user, roles" , user, roles);

  const hasAccess = checkMethod(roles).bind(roles)((role) => {
    // // Checks if user created a record
    // if (role === 'owner') {
    //   return String(user?.id) === String(entityOwnerId);
    // }

    // // Checks if user is authenticated
    // if (role === 'logged-in') {
    //   return Boolean(user?.id);
    // }

    // Checks other roles
    // return userRoles.includes(role); // Multiple roles
    return userRole === role;
  });

  debug &&
    console.log('PERMISSION_DEBUG', {
      hasAccess,
      requiredRoles: roles,
      // userRoles,
      type,
      entityOwnerId,
    });

  return hasAccess;
};
