## No bundle url present?
> https://github.com/facebook/react-native/issues/12754

solve:
1. close your vpn global agent
2.
a. "npm install" b.  run "react-native run-ios" again.

3. you change the project folder, delete the build in ios ,added <key>NSAllowsLocalNetworking</key>... <true/>
