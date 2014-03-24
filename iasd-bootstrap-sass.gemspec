# coding: utf-8
lib = File.expand_path('../lib', __FILE__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'iasd-bootstrap-sass/version'

Gem::Specification.new do |spec|
  spec.name          = "iasd-bootstrap-sass"
  spec.version       = Bootstrap::IASD::VERSION
  spec.authors       = ["Filipi Zimermann"]
  spec.email         = ["filipi@nextt.com.br"]
  spec.description   = %q{Basic CSS framework for IASD DSA websites}
  spec.summary       = %q{Basic CSS framework for IASD DSA websites based on Twitter's Bootstrap framework and the SASS technology}
  spec.homepage      = "http://nextt.com.br/"
  spec.license       = "MIT"

  #spec.files         = `git ls-files`.split($/)
  #spec.executables   = spec.files.grep(%r{^bin/}) { |f| File.basename(f) }
  #spec.test_files    = spec.files.grep(%r{^(test|spec|features)/})
  #spec.require_paths = ["lib"]

  spec.add_development_dependency "bundler"
  spec.add_development_dependency "rake"
  spec.add_development_dependency 'compass'
  spec.add_development_dependency 'sass-rails'
  spec.add_development_dependency 'jekyll'  
  spec.add_development_dependency 'jekyll-compass'

  spec.add_runtime_dependency 'sass', '=3.2.14'
  spec.add_runtime_dependency "bootstrap-sass", '=3.0.0.0'
  spec.add_runtime_dependency "compass-rgbapng"
  spec.add_runtime_dependency "font-awesome-sass-rails"

  spec.files = Dir["stylesheets/**/*.{scss,js,png}"] + Dir["lib/**/*"] + Dir["templates/**/*"] + ["README.md", "LICENSE"]
end
