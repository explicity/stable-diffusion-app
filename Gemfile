source 'https://rubygems.org'
# You may use http://rbenv.org/ or https://rvm.io/ to install and use this version
ruby '2.7.6'

gem 'cocoapods', '= 1.11.3'
gem 'fastlane', '= 2.210.1'

plugins_path = File.join(File.dirname(__FILE__), 'ios', 'fastlane', 'Pluginfile')
eval_gemfile(plugins_path) if File.exist?(plugins_path)
