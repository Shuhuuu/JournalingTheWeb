require "sinatra"
require "json"

get "/api/v0/news" do
    content_type :json
    { :headline => 'value1', :body => 'value2' }.to_json
end

set :public_folder, 'public'

get "/" do
  redirect '/index.html'
end
