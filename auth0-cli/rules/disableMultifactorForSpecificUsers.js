function disableMultifactorForSpecificUsers(user, context, callback) {
  if (user.app_metadata && user.app_metadata.skip_mfa === true) {
    console.log(`${user.email} skipping MFA`)

    context.multifactor = {
      provider: 'none'
    }
  }

  callback(null, user, context)
}
