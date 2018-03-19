require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/json"
require "json"
require "pry" if development? || test?
require 'dotenv/load' if development?
require "net/http"


set :bind, '0.0.0.0'  # bind to all interfaces

set :public_folder, File.join(File.dirname(__FILE__), "public")

configure do
  set :views, './views'
end

Dir[File.join(File.dirname(__FILE__), 'app', '**', '*.rb')].each do |file|
  require file
  also_reload file
end


API_KEY = ENV['DARK_SKY_API']

get "/api/v1/forecast/:latitude,:longitude" do |latitude, longitude|
  uri = URI("https://api.darksky.net/forecast/#{API_KEY}/#{latitude},#{longitude}")
  return Net::HTTP.get(uri)
end

get '*' do
  erb :home
end
