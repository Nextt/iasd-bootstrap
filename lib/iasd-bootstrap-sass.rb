require "iasd-bootstrap-sass/version"

module Bootstrap

  class FrameworkNotFound < StandardError; end

  module IASD
    
    def self.load!

      if compass?
        #require 'bootstrap-sass/compass_functions'
        register_compass_extension
      elsif asset_pipeline?
        #TODO test this
        #require 'bootstrap-sass/sass_functions'
      end

      if !(compass?)
        raise Bootstrap::FrameworkNotFound, "iasd-bootstrap-sass requires either Rails > 3.1 or Compass, neither of which are loaded"
      end

      require 'bootstrap-sass'
      require 'rgbapng'
      # require 'font-awesome-sass-rails'

      stylesheets = File.expand_path(File.join("..", 'stylesheets'))
      ::Sass.load_paths << stylesheets
    end

    private
    def self.asset_pipeline?
      defined?(::Sprockets)
    end

    def self.compass?
      defined?(::Compass)
    end

    def self.register_compass_extension
      base = File.join(File.dirname(__FILE__), '..')
      styles = File.join(base, 'stylesheets')
      templates = File.join(base, 'templates')
      ::Compass::Frameworks.register('iasd-bootstrap', :path => base, :stylesheets_directory => styles, :templates_directory => templates)

    end

  end
end


Bootstrap::IASD.load!
