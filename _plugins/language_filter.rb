# Language detection plugin for Jekyll
module Jekyll
  module LanguageFilter
    def t(input, key)
      lang = @context.registers[:page]['lang'] || @context.registers[:site].config['lang'] || 'en'
      locale_data = @context.registers[:site].data['locales'][lang]
      
      return input unless locale_data
      
      keys = key.split('.')
      result = locale_data
      
      keys.each do |k|
        result = result[k] if result
      end
      
      result || input
    end
  end
end

Liquid::Template.register_filter(Jekyll::LanguageFilter)