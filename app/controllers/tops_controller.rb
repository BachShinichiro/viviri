class TopsController < ApplicationController
  def index
    @blogs = Blog.all
  end
  def show
    @blog = Blog.find(params[:id])
  end
  private
  def blog_params
    params.require(:blog).permit(:title, :content)
  end
end
